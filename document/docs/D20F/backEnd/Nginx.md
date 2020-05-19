# Nginx
 ## Nginx
    yum install nginx -y 安装nginx 服务器
    修改nginx配置文件
    vi /etc/nginx/nginx.conf 
 ## 常用命令
   nginx            # 启动服务
   nginx -s reload  # 向主进程发送信号，重新加载配置文件，热重启
   nginx -s reopen  # 重启 Nginx
   nginx -s stop    # 快速关闭
   nginx -s quit    # 等待工作进程处理完成后关闭
   nginx -T         # 查看当前 Nginx 最终的配置
   nginx -t -c <配置路径>    # 检查配置是否有问题，如果已经在配置目录，则不需要-c

   systemctl start nginx    # 启动 Nginx
   systemctl stop nginx     # 停止 Nginx
   systemctl restart nginx  # 重启 Nginx
   systemctl reload nginx   # 重新加载 Nginx，用于修改配置后
   systemctl enable nginx   # 设置开机启动 Nginx
   systemctl disable nginx  # 关闭开机启动 Nginx
   systemctl status nginx   # 查看 Nginx 运行状态

  ## 其他操作
   nginx日志路径
   /var/log/nginx

   查看nginx进程
   ps -ef|grep nginx

   杀死进程
   kill -TERM 2132

   强制停止
   pkill -9 nginx



    root     /root/test/xiaofang/express/dist;



