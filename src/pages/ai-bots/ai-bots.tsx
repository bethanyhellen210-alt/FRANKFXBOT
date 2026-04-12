import React from 'react';
import { observer } from 'mobx-react-lite';
import './ai-bots.scss';

const AIBots = observer(() => {
    return (
        <div className="ai-bots">
            <iframe
                src="https://v0-derivtradingbots.vercel.app"
                className="ai-bots__iframe"
                title="Deriv AI Trading Bots"
                frameBorder="0"
                allowFullScreen
            />
        </div>
    );
});

export default AIBots;
