import React, { FC } from "react"
import { Form } from "react-bootstrap"
import ISelect from "./ISelect"
import styles from "./Select.module.scss"

const Select: FC<ISelect> = ({ purpose, ...props }) => {
    return (
        <Form.Select
            className={styles["select"]}
            {...props}>
            <option
                selected
                disabled>
                {purpose}
            </option>
            {props.children}
        </Form.Select>
    )
}

export default Select
