import TextLoop from "../../../utils/text/textAnimation/TextLoop";

const TEXT1 = ['Skill Sets', 'Job Trends', 'Qualifications'];
const TEXT2 = ['Software Engineering', 'Embedded Engineering', 'Biochemical Simulation', 'Mechanical Engineering'];

export default  function MainDescription() {
    return (
        <div className="space-y-3">
            <p className="font-black text-3xl uppercase text-gray-700">Explore Current</p>
            <div>
                <TextLoop TEXTS={TEXT1}/>
            </div>
            <p className="font-black text-3xl uppercase text-gray-700">For</p>
            <div >
                <TextLoop TEXTS={TEXT2}/>
            </div>
        </div>
    )
}