// import { Player } from "@remotion/player"
import { memo } from "react"
import { TestComposition } from "../remotion/TestComposition"
import { SharedPlayer } from "./SharedPlayer"

const PageTwo: React.FC = () =>
	<>
		<h1>Page Two</h1>
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

export default memo(PageTwo)