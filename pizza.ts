// Representa o produto final: uma Pizza
export class Pizza {
    public size: string = "";
    public dough: string = "";
    public toppings: string[] = [];

    // Exibe os detalhes da pizza no console
    public display(): void {
        console.log(`Pizza:`);
        console.log(`  Tamanho: ${this.size}`);
        console.log(`  Massa: ${this.dough}`);
        console.log(`  Ingredientes: ${this.toppings.join(", ")}`);
    }
}
