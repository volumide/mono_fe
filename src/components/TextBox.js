import PropTypes from "prop-types";

const TextBox = ({ name, type, id, key, error, register, params = {}, ...useFormPorp }) => {
	return (
		<>
			<input
				name={name}
				type={type}
				id={id}
				key={key}
				{...useFormPorp}
				{...register(name, { ...params })}
			/>
			{/* <span>{error[name] && <span>Field is required</span>}</span> */}
		</>
	);
};

TextBox.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	key: PropTypes.string,
	params: PropTypes.object,
};

export default TextBox;
