"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Wand2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

type Props = {};
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Email is invalid"),
  course: z.string().min(1, "course field is required"),
});

const ContactUsForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      course: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <div className=" p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10">
          <div className="space-y-2 w-full col-span-2">
            <div className="text-lg font-medium">
              <h3>General Information</h3>
              <p className="text-sm text-muted-foreground">
                Provide general information about what you want to know.
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>

          <div className="grid grid-cols-1 gap-4">
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Elon Musk"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Provide your name.</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="CEO & Founder of Tesla"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Enter your email ID.</FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="course"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Course Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-background resize-none"
                      rows={7}
                      disabled={isLoading}
                      placeholder={"I need a course for Game development..."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Enter your email ID.</FormDescription>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-center">
            <Button size="lg" disabled={isLoading}>
              Submit
              <Wand2 className="ml-2 h-5 w-5 " />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactUsForm;
