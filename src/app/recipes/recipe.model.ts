export class Recipe {
    public name; string;
    public description: string;
    public imagePath: string;

    /**
     * @param name
     * @param desc
     * @param imagePath
     */
    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}