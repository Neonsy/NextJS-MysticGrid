type NumberProps = {
    variant: 'play' | 'generate' | 'solve' | 'verify';
    direction?: 'ltr' | 'rtl';
};

const getVariantColor = (variant: NumberProps['variant']) =>
    ({
        play: 'bg-modes-play-text/50',
        generate: 'bg-modes-generate-text/50',
        solve: 'bg-modes-solve-text/50',
        verify: 'bg-modes-verify-text/50',
    })[variant];

export default function Number({ variant, direction = 'ltr' }: NumberProps) {
    const numbers = [...Array(9)].map((_, i) => i + 1).sort(() => Math.random() - 0.5);

    return (
        <div className='flex items-center justify-center'>
            <div
                style={{ transform: `perspective(500px) rotateY(${direction === 'rtl' ? '10deg' : '-10deg'})` }}
                className={`relative rounded-lg bg-slate-900/45 p-2 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-md`}>
                <div className={`grid h-[300px] w-[300px] grid-cols-3 gap-[1.5px] ${getVariantColor(variant)}`}>
                    {numbers.map((number, index) => (
                        <div
                            key={index}
                            className='flex aspect-square select-none items-center justify-center rounded-sm bg-slate-950/90 text-2xl font-bold'>
                            {number}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
