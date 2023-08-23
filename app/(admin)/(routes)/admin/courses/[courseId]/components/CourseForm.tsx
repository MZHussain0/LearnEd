"use client";

import * as z from "zod";
// import { Category, Companion } from "@prisma/client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
// import ImageUpload from "@/components/ImageUpload";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Wand2 } from "lucide-react";
// import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import ImageUpload from "@/components/ImageUpload";

interface CourseFormProps {
  initialData: any | null;
  categories: any;
}

const formSchema = z.object({
  title: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  src: z.string().min(1, { message: "Image is required" }),
  categoryId: z.string().min(1, { message: "Category is required" }),
});

const CourseForm: FC<CourseFormProps> = ({ initialData, categories }) => {
  const router = useRouter();
  // const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      title: "",
      description: "",
      categoryId: undefined,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    // try {
    //   if (initialData) {
    //     // Update companion functionality
    //     await axios.patch(`/api/companion/${initialData.id}`, values);
    //   } else {
    //     // Create companion functionlity
    //     await axios.post("/api/companion", values);
    //   }
    //   toast({
    //     value: "SUCCESS!",
    //   });
    //   router.refresh();
    //   router.push("/");
    // } catch (error) {
    //   toast({
    //     variant: "destructive",
    //     value: "SOMETHING WENT WRONG",
    //   });
    // }
  };

  return (
    <div className="h-full p-4 space-y-2 max-w-3xl mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pb-10">
          <div className="space-y-2 w-full col-span-2">
            <div className="text-lg font-medium">
              <h3>General Information</h3>
              <p className="text-sm text-muted-foreground">
                Provide general information about your course.
              </p>
            </div>
            <Separator className="bg-primary/10" />
          </div>

          <FormField
            name="src"
            render={({ field }) => (
              <FormItem className="flex flex-col items-center justify-center space-y-4 col-span-2">
                <FormControl>
                  <ImageUpload
                    disabled={isLoading}
                    onChange={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder="Web development | 0 to 1"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    This is will be the title of your course
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="bg-background resize-none"
                      rows={7}
                      disabled={isLoading}
                      placeholder={"Learn web development from scratch..."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>
                    Short description of your course.
                  </FormDescription>
                </FormItem>
              )}
            />

            <FormField
              name="categoryId"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-background">
                        <SelectValue
                          defaultValue={field.value}
                          placeholder="Select a category"
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((category: any) => (
                        <SelectItem
                          key={category.id}
                          value={category.name}
                          className="bg-background">
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select a category for your AI companion.
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-center">
            <Button size="lg" disabled={isLoading}>
              {initialData ? "Update" : "Create"} your course
              <Wand2 className="ml-2 h-5 w-5 " />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CourseForm;
