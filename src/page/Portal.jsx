import { ConfettiSideCannons } from "../components/ConfettiSideCannons";
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "../lib/utils";
import { useState } from "react";
import { SparklesText } from "../components/ui/sparkles-text";
import { TypingAnimation } from "../components/ui/typing-animation";

export default function Portal() {

    const [hb, setHb] = useState(false)

    const toggle = () => {
        setHb(!hb)
    }

    return (
        <div>
            {hb ? (
                <>
                    <SparklesText className="z-19">Parabéns Clarinha</SparklesText>
                    <br />
                    <TypingAnimation duration={50} className="typ-text">Feliz aniversário!</TypingAnimation>
                    <br />
                    <br />
                    <TypingAnimation duration={50} className="typ-text" delay={1500}>Que o seu dia seja repleto de alegria, amor e momentos que aqueçam o coração. Você é uma pessoa especial, e merece tudo de melhor hoje e sempre.</TypingAnimation>
                    <br />
                    <br />
                    <TypingAnimation duration={50} className="typ-text" delay={9300}>Deus te abençoe! 🙏🏽❤️</TypingAnimation>
                </>
            ) : (
                <div className=" flex w-full h-full flex-col items-center justify-center ">
                    <DotPattern
                        className={cn(
                            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                        )}
                    />
                    {/* <ConfettiFireworks toggle={toggle}/> */}
                    <ConfettiSideCannons toggle={toggle} />
                    <br/>
                    <text className="click-me">Clique me!</text>
                </div>
            )}
        </div>


    )
}