import { Form, Button } from "@douyinfe/semi-ui";
export default function Speech() {
  function handleSubmit(values) {
    console.log(values);
  }
  return (
    <div className="shadow m-5 p-5 relative">
      <Form layout="vertical" labelPosition="left" onSubmit={values => handleSubmit(values)}>
        {({ formState, values, formApi }) => (
          <>
            <Form.Input className="w-2/5" field="name" label="名字:" placeholder="请输入名字"></Form.Input>
            <Form.Input className="w-4/5" field="content" label="发言:" placeholder="聊点什么~" showClear></Form.Input>
            {
              //<Form.Slot label={{ text: "SlotA" }}>
              //   <div className="flex items-center h-full text-sm">SlotA</div>
              // </Form.Slot>
              // <Form.InputNumber
              //   field="force"
              //   label="强制读取(可选)"
              //   placeholder="秒"
              //   extraText="对于对话框通知，可指定该消息必须在指定时长后才可置为已读。"
              //   extraTextPosition="bottom"
              // />
              // <Form.InputGroup label={{ text: <span>手机号码</span>, optional: true }} labelPosition="top">
              //   <Form.Select style={{ width: 150 }} field="phonePrefix" initValue="+86" rules={[{ required: true }]}>
              //     <Form.Select.Option value="+1">美国+1</Form.Select.Option>
              //     <Form.Select.Option value="+852">香港+852</Form.Select.Option>
              //     <Form.Select.Option value="+86">中国+86</Form.Select.Option>
              //     <Form.Select.Option value="+81">日本+81</Form.Select.Option>
              //   </Form.Select>
              //   <Form.Input
              //     initValue="18912345678"
              //     style={{ width: 250 }}
              //     field="phoneNumber"
              //     rules={[{ required: true }]}
              //   />
              // </Form.InputGroup>
            }
            <Button style={{ display: "none" }} htmlType="submit" />
          </>
        )}
      </Form>
    </div>
  );
}
