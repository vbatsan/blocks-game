import React from 'react';

import style from './style.module.css';

export default function Index() {

	return (
		<div className={style.preload}>
			<div className={style.loader}></div>
		</div>
	);
}
