import React from 'react';

export class MultilineComponents extends React.Component {
    render() {
        return (
            <blockquote>
                <p>Parte 1</p>
                <cite>
                    <a target="_blank"
                        href="https://en.wikipedia.org/wiki/Susan_Sontag">
                        Parte 2
                    </a>
                </cite>
            </blockquote>
        )
    }
}
