import {ChangeEvent} from 'react';

type InputPropsType = {
    currentText: string
    setCurrentText: (newText: string) => void
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newText =event.currentTarget.value;
		props.setCurrentText(newText);

    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
