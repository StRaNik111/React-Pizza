import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = (props) => (
	<ContentLoader className="pizza-block"
		speed={0}
		width={260}
		height={260}
		viewBox="0 0 260 260 "
		backgroundColor="#7b6f6f"
		foregroundColor="#ecebeb"
		{...props}
	>
		<rect x="15" y="225" rx="0" ry="0" width="163" height="15" />
		<rect x="0" y="200" rx="0" ry="0" width="75" height="15" />
		<rect x="105" y="200" rx="0" ry="0" width="75" height="15" />
		<circle cx="90" cy="90" r="90" />
		<rect x="1" y="225" rx="0" ry="0" width="43" height="15" />
		<rect x="49" y="225" rx="0" ry="0" width="43" height="15" />
		<rect x="96" y="225" rx="0" ry="0" width="43" height="15" />
	</ContentLoader>
)

export default Skeleton