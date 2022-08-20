import PropTypes from "prop-types";

const TextBox = ({ name, type, id, key, register, params = {}, ...useFormPorp }) => {
	return (
		<>
			<input
				name={name}
				type={type}
				id={id}
				key={key}
				{...useFormPorp}
				{...register(name, params)}
			/>
		</>
	);
};

TextBox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	key: PropTypes.string,
};

export default TextBox;
