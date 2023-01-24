import { memo } from "react"
import { TestComposition } from "../remotion/TestComposition"
import { SharedPlayer } from "./SharedPlayer"
// import { Player } from "@remotion/player"

const PageOne: React.FC = () =>
	<>
		<h1>Page One</h1>
		{/* <Player
			component={TestComposition}
			durationInFrames={60}
			fps={30}
			compositionWidth={1280}
			compositionHeight={720}
      controls={true}
		/> */}
		<SharedPlayer />
	</>

export default memo(PageOne)