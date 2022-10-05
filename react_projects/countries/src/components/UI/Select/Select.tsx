import React from "react"
import { Form } from "react-bootstrap"
import styles from "./Select.module.scss"

const Select = ({ purpose, ...props }: { purpose: string }) => {
    return (
        <Form.Select className={styles["select"]}>
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
