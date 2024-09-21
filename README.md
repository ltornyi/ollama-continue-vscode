# Set up a fully open-source, local coding assistant

## Install ollama

* Navigate to [Ollama download](https://ollama.com/download)
* Pick your OS, download and install Ollama

## Install Continue VSCode extension

* Read the [documentation](https://docs.continue.dev/docs/getting-started/install)
* Go to [VSCode marketplace](https://marketplace.visualstudio.com/items?itemName=Continue.continue)

## Install an LLM of your choice

* `ollama run deepseek-coder-v2:16b`
* `ollama run starcoder2:3b`

## Configure Continue to use the model

Click the cog in Continue to edit `config.json` and add main model configuration:

    "models": [
        {
            "title": "DeepSeek Coder 2 16B",
            "provider": "ollama",
            "model": "deepseek-coder-v2:16b"
        }
    ],

By default, `starcoder2:3b` is preconfigured for autocomplete.

## Useful Continue actions and commands

* Move the extension to the right sidebar
* Ctlr+L to add highlighted code to the chat
* Ctlr+I to edit highlighted code using prompt
* Hit / in the chat to try commands
* Example: `/test @main.ts`

## Stop models

* `ollama stop` to stop a model without removing it - available since 0.3.11