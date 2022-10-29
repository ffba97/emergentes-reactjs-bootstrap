import React from 'react';

const ColorPicker = (props) => {
    const colors = props.colors;
    const selectedColor = props.selectedColor;
    const onSelectColor = props.onSelectColor;
    const amountOfColor = colors.length;

    const handleColorPick = (color) => {
        onSelectColor(color);
    };

    return (
        <div>
            <div style={{width: 320, height: 80}}>
                {colors.map(c => (
                    <div
                        key={c}
                        style={{
                            width: 320 / amountOfColor,
                            height: 80,
                            backgroundColor: c,
                            display: 'inline-block'
                        }}
                        onClick={() => handleColorPick(c)}
                    ></div>    
                ))}
            </div>
            <div style={{width: 320, height: 320, backgroundColor: selectedColor}}></div>
        </div>
    );
};

export default ColorPicker;