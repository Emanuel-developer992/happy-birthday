import { ConfettiSideCannons } from "../components/ConfettiSideCannons";
import { DotPattern } from "../components/ui/dot-pattern";
import { cn } from "../lib/utils";
import React, { useEffect, useState } from "react";
import { SparklesText } from "../components/ui/sparkles-text";
import { TypingAnimation } from "../components/ui/typing-animation";
import SoundConfetti from "../components/SoundConffeti";
import { useLocation } from "react-router-dom";

export default function Portal() {

    const [hb, setHb] = useState(false)
    const [varName, setVarName] = useState("Clarinha")
    const [textObj, settextObj] = useState({})
    const location = useLocation()

    const text = [
        {
            type: 1,
            text: "Que seu dia seja cheio de alegria, tranquilidade e momentos que aqueçam o coração. Você merece tudo de melhor, hoje e sempre.",
            att: "Com carinho, 🪐",
            nameType: "Família"
        },
        {
            type: 2,
            text: "Que o seu dia seja repleto de alegria, amor e momentos que aqueçam o coração. Você é uma pessoa especial, e merece tudo de melhor hoje e sempre.",
            att: "Com muito apreço, 💖",
            nameType: "Pessoa Especial"
            ,
        },
        {
            type: 3,
            text: "Que seu dia venha cheio de risadas, bons momentos e tudo aquilo que faz a vida ficar mais leve. Você merece o melhor sempre.",
            att: "Um abraço, 🫂",
            nameType: "Amigos"
            ,
        },
        {
            type: 4,
            text: "Que seu dia seja envolto em delicadeza, alegria e momentos que iluminem seu coração. Você merece cada gesto de carinho, cada sorriso sincero e toda a beleza que a vida pode oferecer.",
            att: "Com todo o meu amor, ❤️",
            nameType: "Romantico"
            ,
        },
    ]

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const name = queryParams.get("name")
        const type = queryParams.get("type")
        //?name=John&type=1

        if (name) {
            setVarName(name)
            if (type) {
                const set = text.find(item => item.type == type);
                settextObj(set)
            }
        }

    }, [])

    const toggle = () => {
        setHb(!hb)
        SoundConfetti()
    }

    const ComponentTextAnimated = React.memo(() => {
        return (
            <>
                <SparklesText className="z-19">Parabéns {varName}</SparklesText>
                <br />
                <TypingAnimation duration={50} className="typ-text">Feliz aniversário!</TypingAnimation>
                <br />
                <br />
                <TypingAnimation duration={50} className="typ-text" delay={1500}>{textObj.text || "Que seu dia seja cheio de alegria, tranquilidade e momentos que aqueçam o coração. Você merece tudo de melhor, hoje e sempre."}</TypingAnimation>
                <br />
                <br />
                <TypingAnimation duration={50} className="typ-text" delay={9300}>{textObj.att || "Com carinho, 🪐"}</TypingAnimation>
            </>
        )
    })

    return (
        <div>
            {hb ? (
                <ComponentTextAnimated />
            ) : (
                    <div className = " flex w-full h-full flex-col items-center justify-center ">
                    <DotPattern
                        className = {
                        cn(
                            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
                        )
                    }
                    />
            {/* <ConfettiFireworks toggle={toggle}/> */}
            <ConfettiSideCannons toggle={toggle} />
            <br />
            <text className="click-me">Clique me!</text>
        </div>
    )
}
        </div >


    )
}