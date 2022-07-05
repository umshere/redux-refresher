import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch , useSelector} from "react-redux";

const CartButton = (props) => {
  const itemCount = useSelector(state=>{
    return state.cart.totalQuantity;
  });
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiAction.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemCount}</span>
    </button>
  );
};

export default CartButton;
