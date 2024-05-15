import {ChangeEvent} from 'react';

type InputPropsType = {
    currentText: string // НУЖНО ПРОТИПИЗИРОВАТЬ
    setCurrentText: (newText: string) => void // НУЖНО ПРОТИПИЗИРОВАТЬ
};

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const newText =event.currentTarget.value;
		props.setCurrentText(newText);
        // НУЖНО ДОПИСАТЬ
    };

    return (
        <input id={'hw04-input'} type="text" value={props.currentText} onChange={onChangeHandler}/>
    );
};
