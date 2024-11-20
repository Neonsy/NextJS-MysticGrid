import InfoCard from '@/components/infoCard';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { LuBrainCircuit, LuGrid, LuPlay } from 'react-icons/lu';
export default function Features() {
    return (
        <section id='features' className='bg-features flex flex-col items-center justify-center gap-y-9 py-9'>
            <h2 className='text-primary text-3xl font-bold'>Mystical Powers</h2>

            <div className='grid grid-cols-2 gap-9 text-default'>
                <InfoCard
                    title='Play'
                    description='Immerse yourself in challenging puzzles that will test your logical prowess.'
                    type='primary'
                    icon={LuPlay}
                />
                <InfoCard
                    title='Generate'
                    description='Conjure unique Sudoku grids with varying levels of difficutly.'
                    type='generate'
                    icon={LuGrid}
                />
                <InfoCard
                    title='Solve'
                    description='Validate your own Sudoku puzzles with mystical precision.'
                    type='solve'
                    icon={IoMdCheckmarkCircleOutline}
                />
                <InfoCard
                    title='Verify'
                    description='Unleash the power of arcane algorithms to solve any valid Sudoku.'
                    type='verify'
                    icon={LuBrainCircuit}
                />
            </div>
        </section>
    );
}
