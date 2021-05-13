import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core'

export default function Select({name, options, ...rest}) {

	const selectRef = useRef(null);
	const { registerField, fieldName, defaultValue } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: selectRef.current,
			path: 'value'
		});
	}, [fieldName, registerField]);

	return (
		<select
			ref={selectRef}
			defaultValue={defaultValue && options.find(option => option.value === defaultValue)}
			{...rest}
		>
			{
				options.map((option, index) => {
					return <option key={index} value={option.value}>{option.label}</option>
				})
			}
		</select>
	);

}
