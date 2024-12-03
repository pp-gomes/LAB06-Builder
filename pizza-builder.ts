import { Pizza } from "./pizza";

// Interface PizzaBuilder: Define os métodos para construir uma pizza
export interface PizzaBuilder {
    reset(): this;
    setSize(size: string): this;
    setDough(dough: string): this;
    addTopping(topping: string): this;
    getResult(): Pizza;
}

// Builder concreto para Pizza Margherita
export class MargheritaPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    public reset(): this {
        this.pizza = new Pizza();
        return this;
    }

    public setSize(size: string): this {
        this.pizza.size = size;
        return this;
    }

    public setDough(dough: string): this {
        this.pizza.dough = dough;
        return this;
    }

    public addTopping(topping: string): this {
        this.pizza.toppings.push(topping);
        return this;
    }

    public getResult(): Pizza {
        return this.pizza;
    }
}

// Builder concreto para Pizza Pepperoni
export class PepperoniPizzaBuilder implements PizzaBuilder {
    private pizza: Pizza;

    constructor() {
        this.pizza = new Pizza();
    }

    public reset(): this {
        this.pizza = new Pizza();
        return this;
    }

    public setSize(size: string): this {
        this.pizza.size = size;
        return this;
    }

    public setDough(dough: string): this {
        this.pizza.dough = dough;
        return this;
    }

    public addTopping(topping: string): this {
        this.pizza.toppings.push(topping);
        return this;
    }

    public getResult(): Pizza {
        return this.pizza;
    }
}
