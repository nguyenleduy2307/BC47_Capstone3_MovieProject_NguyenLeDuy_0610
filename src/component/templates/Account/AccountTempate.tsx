import { AccountInfo, Tabs } from "component"

export const AccountTempate = () => {
  return (
    <div>
      <Tabs
        tabPosition="left"
        items={[
          {
            key: 'accountInfo',
            label: 'Thông tin tài khoản',
            children: <AccountInfo/>
          },
          {
            key: 'accountHistoryBooking',
            label: 'Lịch sử đặt vé',
            children: <p>Lịch sử đặt vé</p>
          },

        ]}
      />
    </div>
  )
}
