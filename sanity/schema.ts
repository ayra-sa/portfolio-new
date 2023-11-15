import { type SchemaTypeDefinition } from 'sanity'
import welcome from './schemas/welcome'
import about from './schemas/about'
import technologies from './schemas/technologies'
import projects from './schemas/projects'
import contact from './schemas/contact'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [welcome, about, technologies, projects, contact],
}
