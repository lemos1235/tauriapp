import { Form } from "@douyinfe/semi-ui";
export default function Speech() {
  return (
    <div className="shadow m-5 p-5 relative">
      <Form labelPosition="left">
        <Form.Input className="w-2/5" field="name" label="名字:" placeholder="请输入名字"></Form.Input>
        <Form.Input className="w-4/5" field="content" label="发言:" placeholder="聊点什么~"></Form.Input>
        {/* 字体大小、字体颜色、记录（10行） */}
      </Form>
    </div>
  );
}
