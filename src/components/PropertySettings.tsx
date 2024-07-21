import React, { useState } from 'react';
import styled from 'styled-components';

interface EventObject {
    id?: string;
    calendarId?: string;
    title?: string;
    body?: string;
    isAllday?: boolean;
    start?: Date;
    end?: Date;
    category?: 'time' | 'allday' | 'milestone';
    dueDateClass?: string;
    color?: string;
    backgroundColor?: string;
    dragBackgroundColor?: string;
    borderColor?: string;
    location?: string;
    attendees?: string[];
    recurrenceRule?: string;
    state?: string;
    isVisible?: boolean;
    isPending?: boolean;
    isFocused?: boolean;
    isReadOnly?: boolean;
    isPrivate?: boolean;
    customStyle?: object;
}

const defaultEventProperties: EventObject = {
    id: '',
    calendarId: '',
    title: '',
    body: '',
    isAllday: false,
    start: new Date(),
    end: new Date(),
    category: 'time',
    dueDateClass: '',
    color: '',
    backgroundColor: '',
    dragBackgroundColor: '',
    borderColor: '',
    location: '',
    attendees: [],
    recurrenceRule: '',
    state: '',
    isVisible: true,
    isPending: false,
    isFocused: false,
    isReadOnly: false,
    isPrivate: false,
};

const FormContainer = styled.form`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

const Label = styled.label`
    min-width: 150px;
    margin-right: 10px;
    font-weight: bold;
    color: #333;
`;

const Input = styled.input`
    flex: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Checkbox = styled.input`
    margin-right: 5px;
`;

const PropertySettings: React.FC = () => {
    const [eventProperties, setEventProperties] = useState<EventObject>(defaultEventProperties);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setEventProperties((prev: EventObject) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <FormContainer>
            {Object.entries(eventProperties).map(([key, value]) => (
                <FormGroup key={key}>
                    <Label htmlFor={key}>{key}</Label>
                    {typeof value === 'boolean' ? (
                        <Checkbox
                            type="checkbox"
                            id={key}
                            name={key}
                            checked={value as boolean}
                            onChange={handleChange}
                        />
                    ) : (
                        <Input
                            type="text"
                            id={key}
                            name={key}
                            value={String(value)}
                            onChange={handleChange}
                        />
                    )}
                </FormGroup>
            ))}
        </FormContainer>
    );
};

export default PropertySettings;