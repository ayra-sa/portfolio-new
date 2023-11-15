import { defineField, defineType } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "cover_title",
      title: "Cover Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "cover_title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "detail",
      title: "Detail",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images_detail",
      title: "Images Detail",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "demo",
      title: "Demo",
      type: "url",
    }),
    defineField({
      name: "github",
      title: "Github",
      type: "url",
    }),
  ],
});
