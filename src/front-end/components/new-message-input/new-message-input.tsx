import {
	PButton,
	PTextFieldWrapper,
} from "@porsche-design-system/components-react";
import { type ChangeEvent, type FormEvent, useState } from "react";

import "./new-message-input.css";

export type NewMessageInputProps = {
	onSendMessage: (message: string) => void;
	placeholder: string;
	isLoading: boolean;
};

export const NewMessageInput = ({
	onSendMessage,
	placeholder,
	isLoading,
}: NewMessageInputProps) => {
	const [inputValue, setInputValue] = useState("");
	const hasContent = inputValue.trim().length > 0;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (hasContent) {
			onSendMessage(inputValue);
			setInputValue("");
		}
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className="new-message-input">
			<PTextFieldWrapper className="input-wrapper">
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder={placeholder}
					className="input"
				/>
			</PTextFieldWrapper>
			<PButton
				role="button"
				hideLabel={true}
				icon="arrow-right"
				loading={isLoading}
				disabled={isLoading || !hasContent}
			/>
		</form>
	);
};
