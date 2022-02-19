import React, { forwardRef } from 'react';

const Button = forwardRef(({ onClick, href,type, children }, ref) => {
	return (
		<button className="bg-button text-button-text font-bold py-4 px-5 rounded flex items-center gap-3" href={href} type={type} onClick={onClick} ref={ref}>
			{children}
		</button>
	);
});
Button.displayName = 'Button';

export default Button;

