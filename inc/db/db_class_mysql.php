<?php
class DB {
	
	var $conn;
	function __construct(){
		self::connect();
	}

	public function connect(){

		/* Connect using Windows Authentication. */
		try
		{

			/// Database Connection  ///
			$db_name = 'mysql:host='.DB_HOST.';dbname='.DBNAME;
			$db_user = DB_USER;
			$db_pass = DB_PWD;
			$db_options = array(
				PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'
			); 

			$this->conn = new PDO($db_name, $db_user, $db_pass, $db_options);
			$this->conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		}
		catch(Exception $e)
		{ 
			die( print_r( $e->getMessage() ) ); 
		}
	}
	
	public function select( $tsql ){
		$get = $this->conn->prepare($tsql);
		try
		{
			$get->execute();
		}
		catch(Exception $e)
		{ 
			echo "<pre>";
			 print_r( $e ) ;
			 exit;
		}

		$data = $get->fetchAll(PDO::FETCH_ASSOC);
		$this->count = count($data);
		return $data;
	}


	public function query( $tsql ){
		$get = $this->conn->prepare($tsql);
		try
		{
			$get->execute();
		}
		catch(Exception $e)
		{ 
			echo "<pre>";
			 print_r( $e ) ;
			 exit;
		}
		return $get;
	}

	public function select_filter($tsql,$filter){
		$get = $this->conn->prepare($tsql);
		try
		{
			$get->execute($filter);
			$data = $get->fetchAll(PDO::FETCH_ASSOC);
			$this->count = count($data);
			return $data;
		} catch(Exception $e){ 
			return "error";
			exit;
		}
	}

	public function insert_GetLastId( $tsql ){
		$get = $this->conn->prepare($tsql);
		try
		{
			$get->execute();
			return $this->conn->lastInsertId();
		}
		catch(Exception $e)
		{ 
			echo "<pre>";
			 print_r( $e ) ;
			 exit;
		}
	}	

	public function getCount( ){
		return $this->count;
	}
	
	public function numrows( ){
		$this->getCount( );
	}
	
	public function insert_id(){
		return $conn->lastInsertId();
	}

	// ตัวสร้าง dropdown select 	
	public function dropdown($sql, $conf){ // sql, config
		/*
			type of config
			id,name,class,key, value, selected ,multiple
		*/
		$id = $conf['id'];
		$name = $conf['name'];
		$class = $conf['class'];
		$style = $conf['style'];
		$value = $conf['value'];
		$text = $conf['text'];
		$selected = $conf['selected'];
		$firstopt = $conf['firstopt'];
		$disabled = $conf['disabled'];
		$required = $conf['required'];
		$readonly = $conf['readonly'];
		$line_order = $conf['line_order'];
		$attr = $conf['attr'];
		
		$data = $this->select($sql);
	
		echo "<select name='$name' id='$id' class='$class' style='$style' $disabled $readonly $attr $required > ";
		if($firstopt){
		echo "<option value=''>$firstopt</option>";
		}
		$i = 1;
		$num = 0;
		foreach($data as $data_arr){
			$num++;
			if($line_order){
				$txt_order ="{$num}.";
			}else{
				$txt_order ="";
			}
			$value_option =  $data_arr[$value];
			$text_option =  $data_arr[$text];
			if($selected==$value_option){	$selected_txt = ' selected '; }else{	$selected_txt = ''; }
			echo "<option value='$value_option' $selected_txt >{$txt_order}{$text_option}</option>";
			$i++;
		}
		echo '</select>';
	}


}
$db = new DB;
?>