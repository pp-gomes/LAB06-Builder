import { PizzaBuilder } from "./pizza-builder";

// Diretor responsável por criar receitas predefinidas
export class PizzaDirector {
    private builder!: PizzaBuilder;

    // Define o builder a ser utilizado
    public setBuilder(builder: PizzaBuilder): void {
        this.builder = builder;
    }

    // Cria uma pizza Margherita
    public buildMargheritaPizza(): void {
        this.builder.reset()
            .setSize("grande")
            .setDough("fina")
            .addTopping("Queijo")
            .addTopping("Tomate")
            .addTopping("Manjericão");
    }

    // Cria uma pizza Pepperoni
    public buildPepperoniPizza(): void {
        this.builder.reset()
            .setSize("média")
            .setDough("tradicional")
            .addTopping("Queijo")
            .addTopping("Pepperoni");
    }
}
