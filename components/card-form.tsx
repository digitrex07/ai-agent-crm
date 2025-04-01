import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CardWithForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Modify Knowledge base</CardTitle>
        <CardDescription className="pt-3">Use this form to update knowledge base for the selected agent. Try to follow the RTGC (Role Task Guideline Context) pattern for instructions and ensure the data submitted is structured for best results. If you have any queries, feel free to contact us for best practices related to finetuning your agent or anything else.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="py-2">Name</Label>
              <Input id="name" placeholder="Name of your knowledge base item" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="agent" className="py-2">Agent</Label>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Agent" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Agent 1">Agent 1</SelectItem>
                    <SelectItem value="Agent 2">Agent 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col space-y-1.5">
            <Label htmlFor="url" className="py-2">Data</Label>
              <Textarea  placeholder="Enter Data in Text / JSON format" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="url" className="py-2">URL</Label>
              <Input id="url" placeholder="Enter URL if you want us to scrape data from external sources" />
            </div>
            
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex">
        <Button className="w-full">Submit</Button>
        
      </CardFooter>
    </Card>
  )
}
