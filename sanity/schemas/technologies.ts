import { defineField, defineType } from "sanity";

export default defineType({
  name: "technologies",
  title: "Technologies",
  type: "document",
  fields: [
    defineField({
      name: "stack",
      title: "Stack",
      type: "array",
      of: [
        {
          type: "object",
          name: "techItem",
          title: "Technology Item",
          fields: [
            {
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
            {
              name: "label",
              title: "Label",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
});
