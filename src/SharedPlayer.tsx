import { Player } from "@remotion/player"
import { TestComposition } from "../remotion/TestComposition"

const SharedPlayer: React.FC = () => (
	<Player
		component={TestComposition}
		durationInFrames={60}
		fps={30}
		compositionWidth={1280}
		compositionHeight={720}
		controls={true}
	/>
)

export { SharedPlayer }