# LAB02 - Padrão Builder: Sistema de Criação de Pizzas 🍕

Este projeto implementa o padrão de projeto **Builder** para criar objetos do tipo `Pizza`. O sistema permite configurar diferentes tipos de pizzas, tanto predefinidas quanto personalizadas, utilizando uma abordagem modular e orientada a objetos.

## 🚀 Objetivo

Demonstrar o uso do padrão **Builder** em TypeScript para construir objetos complexos de maneira flexível e passo a passo.

- Criar receitas predefinidas:
  - **Pizza Margherita**: Tamanho grande, massa fina, ingredientes: queijo, tomate, manjericão.
  - **Pizza Pepperoni**: Tamanho médio, massa tradicional, ingredientes: queijo, pepperoni.
- Permitir que clientes criem pizzas personalizadas escolhendo:
  - Tamanho.
  - Tipo de massa.
  - Ingredientes opcionais.

---

## 🛠️ Estrutura do Projeto

O projeto é dividido nos seguintes módulos:

1. **`pizza.ts`**: Define o produto final (`Pizza`) com atributos como tamanho, massa e ingredientes.
2. **`pizza-builder.ts`**: Contém:
   - A interface `PizzaBuilder`, que define os métodos para configurar os atributos da pizza.
   - Os Builders concretos `MargheritaPizzaBuilder` e `PepperoniPizzaBuilder` para construir receitas específicas.
3. **`pizza-director.ts`**: Implementa o `PizzaDirector`, que organiza a sequência de passos para criar pizzas predefinidas (Margherita e Pepperoni).
4. **`teste-pizza.ts`**: Arquivo de teste que demonstra a criação de pizzas predefinidas e personalizadas.

---

## 🔧 Tecnologias Utilizadas

- **TypeScript**: Linguagem principal do projeto.
- **Node.js**: Para executar o código gerado.

---

## 📂 Estrutura de Diretórios

. ├── pizza.ts # Define a classe Pizza ├── pizza-builder.ts # Interface e Builders concretos ├── pizza-director.ts # Implementa o PizzaDirector ├── teste-pizza.ts # Arquivo de teste com exemplos de uso ├── tsconfig.json # Configurações do TypeScript (opcional)

yaml
Copiar código

---

## ⚙️ Configuração do Ambiente

### 1. Pré-requisitos

- **Node.js** instalado:
  - [Download Node.js](https://nodejs.org/)
- **TypeScript** instalado globalmente:
  ```bash
  npm install -g typescript
## 🚀 Como Executar o Projeto
### 1. Clone o Repositório
bash
Copiar código
git clone https://github.com/seu-usuario/lab02-builder-pizzas.git
cd lab02-builder-pizzas
### 2. Compile os Arquivos TypeScript
bash
Copiar código
tsc pizza.ts pizza-builder.ts pizza-director.ts teste-pizza.ts
Isso gerará arquivos .js correspondentes no mesmo diretório.

### 3. Execute o Arquivo de Teste
  ```bash 
  Copiar código
  node teste-pizza.js

## 🧪 Exemplos de Saída
Ao executar o arquivo de teste (teste-pizza.ts), o console exibirá algo como:

```bash
Copiar código
Pizza:
  Tamanho: grande
  Massa: fina
  Ingredientes: Queijo, Tomate, Manjericão
Pizza:
  Tamanho: média
  Massa: tradicional
  Ingredientes: Queijo, Pepperoni
Pizza:
  Tamanho: pequena
  Massa: recheada
  Ingredientes: Queijo, Frango, Milho

## ✨ Funcionalidades Demonstradas
### 1. Pizzas Predefinidas:
  Através do PizzaDirector, é possível criar:
  Pizza Margherita.
  Pizza Pepperoni.
### 2. Pizza Personalizada:
  Criada diretamente por um Builder, sem o uso do PizzaDirector.

## 🧱 Extensibilidade
O projeto é altamente modular, permitindo adicionar facilmente novos tipos de pizzas ou novas formas de personalização. Basta criar novos Builders ou estender o PizzaDirector com receitas adicionais.
