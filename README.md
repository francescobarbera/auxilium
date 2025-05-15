# Auxilium

Auxilium is a React based, entity-driven chat assistant that leverages LLMs to provide structured, context-aware responses. The system is designed for extensibility, allowing new entities (like todos, notes, etc.) to be added easily and rendered dynamically in the UI.

## Features

- **Conversational UI**: Chat interface styled with the Porsche Design System.
- **Entity Recognition**: The assistant can identify if a user’s message relates to a specific entity (e.g., todos) and respond with structured JSON.
- **Dynamic Rendering**: Entities are rendered using a catalogue-driven approach, allowing for easy extension.
- **OpenAI Integration**: Uses a fine-tuned GPT-3.5 model for generating responses.
- **TypeScript-first**: Strongly typed with custom type guards for message handling.

## Project Structure

```
src/
  core/                # Core types and interfaces (entities, messages, LLM interface)
  entities-catalogue/  # Entity definitions and React components (e.g., todos)
  llm-implementations/ # LLM integration (OpenAI)
  front-end/           # React app, hooks, and UI components
```

## Key Concepts

### Entities

Entities are modular UI/data types (e.g., todos) defined in the `entities-catalogue`. Each entity has:
- `name`: Unique identifier
- `component`: React component for rendering
- `descriptor`: Textual description for LLM context

### LLM Integration

In the example, the assistant uses OpenAI’s API, with a custom system prompt to enforce structured (JSON) responses. The LLM implementation is abstracted via the `LLMInterface`.

## Getting Started

1. **Install dependencies**  
   ```bash
   yarn install
   ```

2. **Set up environment**  
   Create a `.env` file with your OpenAI API key:
   ```
   VITE_OPENAI_API_KEY=sk-...
   ```

3. **Run the development server**  
   ```bash
   yarn dev
   ```

4. **Run tests**  
   ```bash
   yarn test
   ```

## Adding a New Entity

1. Create a new folder in `src/entities-catalogue/`.
2. Define the entity’s type, component, and descriptor.
3. Add the entity to `entitiesCatalogue` in `index.tsx`.

## License

This project is licensed under the Apache License 2.0. See the [LICENSE](LICENSE) file for details.
