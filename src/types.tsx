type flavor = "Vanilla" |
"Butter Cream"|
"Lemon"|
"Cream Cheese"|
"Cookie Crumbs"|
"Strawberry"|
"Peanut Butter"|
"Oreo"|
"Champagne"|
"Mint Chocolate"|
"German Chocolate"|
"Espresso"|
"Pink Lemonade"|
"Maple Bacon"|
"Dark Chocolate"|
"Milk Chocolate"|
"Coconut Pecan";

type color = "red" | "orange" | "purple" | "blue" | "pink" | "yellow" | "green";

type CupcakeProps = {
    base: flavor;
    icing: string;
    color: color;
    
    decoration : boolean;


}