type FeatureBoardProps = {
    className?: string;
    cellBg: string;
};

export default function FeatureBoard({ cellBg, className }: FeatureBoardProps) {
    const cellNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9].sort(() => 0.5 - Math.random());

    return (
        <div className={`${className} grid w-fit grid-cols-3 grid-rows-3 gap-2 bg-slate-950 p-6`}>
            {cellNumbers.map((number) => (
                <div
                    key={number}
                    className={`${cellBg} board-cell-shadow flex h-32 w-32 items-center justify-center rounded-2xl text-3xl text-default`}>
                    {number}
                </div>
            ))}
        </div>
    );
}
