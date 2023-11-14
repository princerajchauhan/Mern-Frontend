import { loadStripe } from '@stripe/stripe-js';

export const MakePayment = async (prod) => {
    const stripe = await loadStripe("pk_test_51O2pl0SGM01vn0zuhMB8YaDsKBiV9XDJdbkITDDoOcMtOzO2LahZILM1gTDmKRpa7yYi14RuYBNealmsubNfp3aW004UlMoyaG")
    const body = {
        product: [{...prod, quantity: 1}]
    }

    const headers = {
        "Content-Type": "application/json"
    }

    const response = await fetch("https://mern-backend-pntb.onrender.com/pay/create-checkout-session", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body)
    });

    const session = await response.json()
    const result = stripe.redirectToCheckout({
        sessionId: session.id
    })
    if (result.error) {
        console.log(result.error)
    }
}