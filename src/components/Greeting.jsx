import { useState } from "preact/hooks";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:3242732215.
export default function Greeting({messages}) {
    const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3> {greeting}! Obrigado por visitar o meu Blog </h3>
            <button onClick={() => setGreeting(randomMessage())}>
                {greeting}
                Nova Mensagem
            </button>
        </div>
    )

}