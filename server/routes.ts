import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Define API routes 
  app.post("/api/waitlist", async (req: Request, res: Response) => {
    try {
      // Validate request body
      const parsedData = insertWaitlistSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({ 
          message: fromZodError(parsedData.error).message 
        });
      }
      
      // Check if email exists
      const existingEntry = await storage.getWaitlistEntryByEmail(parsedData.data.email);
      if (existingEntry) {
        return res.status(409).json({ 
          message: "Email already exists in our waitlist" 
        });
      }
      
      // Create waitlist entry
      const entry = await storage.createWaitlistEntry(parsedData.data);
      
      // Return success response
      return res.status(201).json({ 
        message: "Successfully added to waitlist", 
        entry 
      });
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  app.get("/api/waitlist/count", async (_req: Request, res: Response) => {
    try {
      const entries = await storage.getWaitlistEntries();
      return res.status(200).json({ count: entries.length });
    } catch (error) {
      console.error("Error getting waitlist count:", error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
