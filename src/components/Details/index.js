import { useEffect, useState } from "react";
import "./_details.scss";

export default function Details() {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className={flag ? "container theme-changer" : "container"}>
      {/* <h2>{flag.toString()}</h2> */}
      <div className="header">
        <h1>Dark Mode Challenge</h1>
      </div>
      <div>
        <button onClick={() => setFlag(!flag)}>Toggle</button>
      </div>
      <div>
        <p>
          Lollipop powder powder. Cotton candy caramels chupa chups halvah
          muffin caramels apple pie topping cake. Topping chocolate bar pastry
          chocolate cake. Cupcake tart jujubes dragée jelly-o icing sugar plum.
          Chocolate bar lollipop candy canes. Biscuit croissant apple pie
          pudding caramels wafer tart tootsie roll macaroon. Croissant tiramisu
          chocolate bar carrot cake lemon drops halvah.
        </p>
        <p>
          Marshmallow tiramisu liquorice bear claw chocolate bar bear claw tart.
          Muffin chupa chups pie. Brownie apple pie topping lemon drops marzipan
          toffee. Pudding macaroon icing ice cream bonbon cake tart. Pudding
          sugar plum chocolate cake cake biscuit pastry pastry chocolate bar
          tart. Lemon drops dessert gummies icing.
        </p>
      </div>
      <div>
        <input type="text" placeholder="Name" />
      </div>
      <div>
        <input type="text" placeholder="Email" />
      </div>
      <div className="saveSubmit">
        <button>Save</button>
        <button>Submit</button>
      </div>
    </div>
  );
}
