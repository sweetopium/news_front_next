import React, {useEffect, useState} from 'react';

function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return !navigator.userAgent.match(toMatchItem);
    });
}


const CustomAd = ({url, image, title, text, btnText}) => {
    const [isMob, setIsMob] = useState(false)
    useEffect(() => {
        setIsMob(detectMob())
    }, [])
    const yaAdWrapper = {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "position": "relative",
        "padding": "0px 15px 10px 15px",
        "width": "100%",
    }

    const yaAdItemHeader = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "color": "#697380"
    }

    const yaAdItemImage = {
        "margin": "15px 0px"
    }

    const yaAdItemImageImg = {
        "maxWidth": "100%"
    }

    const yaAdItemTitle = {
        "margin": "15px 0px"
    }
    const yaAdItemTitleHeader = {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "WebkitBoxOrient": "vertical",
        "display": "-webkit-box",
        "WebkitLineClamp": "3",
        "fontSize": "20px",
        "lineHeight": "calc(1em + 2px)",
        "color": "#222526"
    }

    const yaAdItemTitleDescription = {
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "WebkitBoxOrient": "vertical",
        "display": "-webkit-box",
        "WebkitLineClamp": "4",
        "lineHeight": "calc(1em + 3px)",
        "fontSize": "15px",
        "color": "#6b7582"
    }
    const yaAdItemButton = {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",
        "boxSizing": "border-box",
        "padding": "12px",
        "fontSize": "15px",
        "textAlign": "center",
        "color": "#3377ff",
        "backgroundColor": "#3377FF1A",
        "borderRadius": "6px",
        "marginTop": "15px",
        "transition": "var(--cta-transition)"
    }
    const yaUnitKebabDots = {
        "fill": "#6e7884"
    }
    const yrwURL = {
        "textDecoration": "none",
        "background": "#f4f4f6",
        "borderRadius": "8px",
        "padding": "10px"
    }
    if (isMob) {
        return (
            <div className="ya-ad-wrapper" style={yaAdWrapper}>
                <a className="yrw-url" style={yrwURL} target="__blank" href={url}>
                    <div className="ya-ad-item">
                        <div className="ya-ad-item__header" style={yaAdItemHeader}>
                            <div className="ya-ad-item__ads-badge">Реклама</div>
                            <div className="ya-unit-kebab_button">
                                <div className="ya-unit-kebab_bg ya-unit-kebab_20d4f822"/>
                                <div className="ya-unit-kebab_icon">
                                    <svg className="ya-unit-kebab_dots" style={yaUnitKebabDots} width="8" height="20"
                                         viewBox="0 0 8 20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="4" cy="4" r="1.5"/>
                                        <circle cx="4" cy="10" r="1.5"/>
                                        <circle cx="4" cy="16" r="1.5"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="ya-ad-item__container">
                            <div className="ya-ad-item__image" style={yaAdItemImage}>
                                <img alt="img" style={yaAdItemImageImg}
                                     src={image}/>
                            </div>
                            <div className="ya-ad-item__title" style={yaAdItemTitle}>
                                <h3 style={yaAdItemTitleHeader}>{title}</h3>
                            </div>
                            <div className="ya-ad-item__description">
                        <span style={yaAdItemTitleDescription}>{text}</span>
                            </div>
                            <div className="ya-ad-item__button" style={yaAdItemButton}>
                                <span>{btnText}</span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    } else {
        return <div/>
    }
};

export default CustomAd;