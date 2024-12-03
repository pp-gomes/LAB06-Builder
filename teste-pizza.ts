import { PizzaDirector } from "./pizza-director";
import { MargheritaPizzaBuilder, PepperoniPizzaBuilder } from "./pizza-builder";
import { PizzaBuilder } from "./pizza-builder";

// Diretor e Builders concretos
const director = new PizzaDirector();
const margheritaBuilder = new MargheritaPizzaBuilder();
const pepperoniBuilder = new PepperoniPizzaBuilder();

// Criando uma Pizza Margherita
director.setBuilder(margheritaBuilder);
director.buildMargheritaPizza();
const margherita = margheritaBuilder.getResult();
margherita.display();

// Criando uma Pizza Pepperoni
director.setBuilder(pepperoniBuilder);
director.buildPepperoniPizza();
const pepperoni = pepperoniBuilder.getResult();
pepperoni.display();

// Criando uma Pizza Personalizada
const customBuilder: PizzaBuilder = new MargheritaPizzaBuilder();
const customPizza = customBuilder.reset()
    .setSize("pequena")
    .setDough("recheada")
    .addTopping("Queijo")
    .addTopping("Frango")
    .addTopping("Milho")
    .getResult();

customPizza.display();
