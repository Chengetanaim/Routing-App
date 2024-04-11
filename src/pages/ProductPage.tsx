import { useParams } from "react-router-dom";
import { products } from "../data/products";

type Params = {
    is: string;
}

export function ProductPage(){
    const params = useParams();
    const id = params.id === undefined ? undefined: parseInt(params.id);
    const product = products.find((product) => product.id === id);

    return (
        <div className="text-center p-5 text-xl">
            {product === undefined ? (
                <h1 className="text-xl text-slate-900">
                    Unknown product
                </h1>
            ): (
                <>
                    <h1 className="text-xl text-slate-900">
                        {product.name}
                    </h1>
                    <p className="text-base text-slate-800">
                        {product.description}
                    </p>
                    <p className="text-base text-slate-800">
                        {`$${product.price}.00`}
                    </p>
                </>
            )}
        </div>
    );
}