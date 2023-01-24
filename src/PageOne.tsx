import { Player } from "@remotion/player"
import { memo } from "react"
import { TestComposition } from "../remotion/TestComposition"

const PageOne: React.FC = () =>
	<>
		<h1>Page One</h1>
		<Player
			component={TestComposition}
			durationInFrames={60}
			fps={30}
			compositionWidth={1280}
			compositionHeight={720}
      controls={true}
		/>
	</>

export default memo(PageOne)