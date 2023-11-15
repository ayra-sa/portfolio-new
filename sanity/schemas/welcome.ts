import { defineField, defineType } from "sanity";

export default defineType({
  name: "welcome",
  title: "Welcome",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
  ],
});
